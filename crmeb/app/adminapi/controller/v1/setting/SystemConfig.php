<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------
namespace app\adminapi\controller\v1\setting;

use app\adminapi\controller\AuthController;
use app\Request;
use app\services\system\config\SystemConfigServices;
use app\services\system\config\SystemConfigTabServices;
use think\facade\App;

/**
 * 系统配置
 * Class SystemConfig
 * @package app\adminapi\controller\v1\setting
 */
class SystemConfig extends AuthController
{

    /**
     * SystemConfig constructor.
     * @param App $app
     * @param SystemConfigServices $services
     */
    public function __construct(App $app, SystemConfigServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        $where = $this->request->getMore([
            ['tab_id', 0],
            ['status', -1]
        ]);
        if (!$where['tab_id']) {
            return app('json')->fail('参数错误');
        }
        if ($where['status'] == -1) {
            unset($where['status']);
        }
        return app('json')->success($this->services->getConfigList($where));
    }

    /**
     * 显示创建资源表单页.
     * @param $type
     * @return \think\Response
     */
    public function create()
    {
        [$type, $tabId] = $this->request->getMore([
            [['type', 'd'], ''],
            [['tab_id', 'd'], 1]
        ], true);
        return app('json')->success($this->services->createFormRule($type, $tabId));
    }

    /**
     * 保存新建的资源
     *
     * @return \think\Response
     */
    public function save()
    {
        $data = $this->request->postMore([
            ['menu_name', ''],
            ['type', ''],
            ['input_type', 'input'],
            ['config_tab_id', 0],
            ['parameter', ''],
            ['upload_type', 1],
            ['required', ''],
            ['width', 0],
            ['high', 0],
            ['value', ''],
            ['info', ''],
            ['desc', ''],
            ['sort', 0],
            ['status', 0]
        ]);
        if (!$data['info']) return app('json')->fail('请输入配置名称');
        if (!$data['menu_name']) return app('json')->fail('请输入字段名称');
        if (!$data['desc']) return app('json')->fail('请输入配置简介');
        if ($data['sort'] < 0) {
            $data['sort'] = 0;
        }
        if ($data['type'] == 'text') {
            if (!$data['width']) return app('json')->fail('请输入文本框的宽度');
            if ($data['width'] <= 0) return app('json')->fail('请输入正确的文本框的宽度');
        }
        if ($data['type'] == 'textarea') {
            if (!$data['width']) return app('json')->fail('请输入多行文本框的宽度');
            if (!$data['high']) return app('json')->fail('请输入多行文本框的高度');
            if ($data['width'] < 0) return app('json')->fail('请输入正确的多行文本框的宽度');
            if ($data['high'] < 0) return app('json')->fail('请输入正确的多行文本框的宽度');
        }
        if ($data['type'] == 'radio' || $data['type'] == 'checkbox') {
            if (!$data['parameter']) return app('json')->fail('请输入配置参数');
            $this->services->valiDateRadioAndCheckbox($data);
        }
        $data['value'] = json_encode($data['value']);
        $config = $this->services->getOne(['menu_name' => $data['menu_name']]);
        if ($config) {
            $this->services->update($config['id'], $data, 'id');
        } else {
            $this->services->save($data);
        }
        \crmeb\services\CacheService::clear();
        return app('json')->success('添加配置成功!');
    }

    /**
     * 显示指定的资源
     *
     * @param int $id
     * @return \think\Response
     */
    public function read($id)
    {
        if (!$id) {
            return app('json')->fail('参数错误，请重新打开');
        }
        $info = $this->services->getReadList((int)$id);
        return app('json')->success(compact('info'));
    }

    /**
     * 显示编辑资源表单页.
     *
     * @param int $id
     * @return \think\Response
     */
    public function edit($id)
    {
        return app('json')->success($this->services->editConfigForm((int)$id));
    }

    /**
     * 保存更新的资源
     *
     * @param int $id
     * @return \think\Response
     */
    public function update($id)
    {
        $type = request()->post('type');
        if ($type == 'text' || $type == 'textarea' || $type == 'radio' || ($type == 'upload' && (request()->post('upload_type') == 1 || request()->post('upload_type') == 3))) {
            $value = request()->post('value');
        } else {
            $value = request()->post('value/a');
        }
        if (!$value) $value = request()->post(request()->post('menu_name'));
        $data = $this->request->postMore([
            ['menu_name', ''],
            ['type', ''],
            ['input_type', 'input'],
            ['config_tab_id', 0],
            ['parameter', ''],
            ['upload_type', 1],
            ['required', ''],
            ['width', 0],
            ['high', 0],
            ['value', $value],
            ['info', ''],
            ['desc', ''],
            ['sort', 0],
            ['status', 0]
        ]);
        if (!$this->services->get($id)) {
            return app('json')->fail('编辑的记录不存在!');
        }
        $data['value'] = json_encode($data['value']);
        $this->services->update($id, $data);
        \crmeb\services\CacheService::clear();
        return app('json')->success('修改成功!');
    }

    /**
     * 删除指定资源
     *
     * @param int $id
     * @return \think\Response
     */
    public function delete($id)
    {
        if (!$this->services->delete($id))
            return app('json')->fail('删除失败,请稍候再试!');
        else {
            \crmeb\services\CacheService::clear();
            return app('json')->success('删除成功!');
        }
    }

    /**
     * 修改状态
     * @param $id
     * @param $status
     * @return mixed
     */
    public function set_status($id, $status)
    {
        if ($status == '' || $id == 0) {
            return app('json')->fail('参数错误');
        }
        $this->services->update($id, ['status' => $status]);
        \crmeb\services\CacheService::clear();
        return app('json')->success($status == 0 ? '隐藏成功' : '显示成功');
    }

    /**
     * 基础配置
     * */
    public function edit_basics(Request $request)
    {
        $tabId = $this->request->param('tab_id', 1);
        if (!$tabId) {
            return app('json')->fail('参数错误');
        }
        $url = $request->baseUrl();
        return app('json')->success($this->services->getConfigForm($url, $tabId));
    }

    /**
     * 保存数据    true
     * */
    public function save_basics(Request $request)
    {
        $post = $this->request->post();
        foreach ($post as $k => $v) {
            if (is_array($v)) {
                $res = $this->services->getUploadTypeList($k);
                foreach ($res as $kk => $vv) {
                    if ($kk == 'upload') {
                        if ($vv == 1 || $vv == 3) {
                            $post[$k] = $v[0];
                        }
                    }
                }
            }
        }
        $this->validate($post, \app\adminapi\validate\setting\SystemConfigValidata::class);
        if (isset($post['upload_type'])) {
            $this->services->checkThumbParam($post);
        }
        if (isset($post['store_brokerage_binding_status'])) {
            $this->services->checkBrokerageBinding($post);
        }
        if (isset($post['store_brokerage_ratio']) && isset($post['store_brokerage_two'])) {
            $num = $post['store_brokerage_ratio'] + $post['store_brokerage_two'];
            if ($num > 100) {
                return app('json')->fail('一二级返佣比例不能大于100%');
            }
        }
        if (isset($post['spread_banner'])) {
            $num = count($post['spread_banner']);
            if ($num > 5) {
                return app('json')->fail('分销海报不能多于5张');
            }
        }
        if (isset($post['user_extract_min_price'])) {
            if (!preg_match('/[0-9]$/', $post['user_extract_min_price'])) {
                return app('json')->fail('提现最低金额只能为数字!');
            }
        }
        if (isset($post['wss_open'])) {
            $this->services->saveSslFilePath((int)$post['wss_open'], $post['wss_local_pk'] ?? '', $post['wss_local_cert'] ?? '');
        }
        if (isset($post['store_brokerage_price']) && $post['store_brokerage_statu'] == 3) {
            if ($post['store_brokerage_price'] === '') {
                return app('json')->fail('满额分销最低金额不能为空！');
            }
            if ($post['store_brokerage_price'] < 0) {
                return app('json')->fail('满额分销最低金额不能小于0！');
            }
        }
        if (isset($post['store_brokerage_binding_time']) && $post['store_brokerage_binding_status'] == 2) {
            if (!preg_match("/^[0-9][0-9]*$/", $post['store_brokerage_binding_time'])) {
                return app('json')->fail('绑定有效期请填写正整数！');
            }
        }
        if (isset($post['weixin_ckeck_file'])) {
            $from = public_path() . $post['weixin_ckeck_file'];
            $to = public_path() . array_reverse(explode('/', $post['weixin_ckeck_file']))[0];
            @copy($from, $to);
        }
        if (isset($post['ico_path'])) {
            $from = public_path() . $post['ico_path'];
            $toAdmin = public_path('admin') . 'favicon.ico';
            $toHome = public_path('home') . 'favicon.ico';
            $toPublic = public_path() . 'favicon.ico';
            @copy($from, $toAdmin);
            @copy($from, $toHome);
            @copy($from, $toPublic);
        }
        foreach ($post as $k => $v) {
            $config_one = $this->services->getOne(['menu_name' => $k]);
            if ($config_one) {
                $config_one['value'] = $v;
                $this->services->valiDateValue($config_one);
                $this->services->update($k, ['value' => json_encode($v)], 'menu_name');
            }
        }
        \crmeb\services\CacheService::clear();
        return app('json')->success('修改成功');

    }

    /**
     * 获取系统设置头部分类
     * @param SystemConfigTabServices $services
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function header_basics(SystemConfigTabServices $services)
    {
        [$type, $pid] = $this->request->getMore([
            [['type', 'd'], 0],
            [['pid', 'd'], 0]
        ], true);
        if ($type == 3) {//其它分类
            $config_tab = [];
        } else {
            $config_tab = $services->getConfigTab($pid);
        }
        return app('json')->success(compact('config_tab'));
    }

    /**
     * 获取单个配置的值
     * @param $name
     * @return mixed
     */
    public function get_system($name)
    {
        $value = sys_config($name);
        return app('json')->success(compact('value'));
    }

    /**
     * 获取某个分类下的所有配置
     * @param $tabId
     * @return mixed
     */
    public function get_config_list($tabId)
    {
        $list = $this->services->getConfigTabAllList($tabId);
        $data = [];
        foreach ($list as $item) {
            $data[$item['menu_name']] = json_decode($item['value']);
        }
        return app('json')->success($data);
    }
}
