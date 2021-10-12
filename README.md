# MenoyManage

这是一个涵盖了VUE + ElementUI + Nodejs + Mongodb 的全栈项目

有注册、登录与增删改查的基本功能

1、注册时采用了bcryptjs加密了密码并安全的存放在MongoDB数据库中，并且邮箱为主键且唯一

2、登录时使用jwt添加登录令牌token，一登录成功就保存在localStorage中并且同时存放在Vuex中给接下来的数据库请求服务

3、由于做了路由守卫在为进行登录之前不能进行任何操作，跳转其他页面时会强制跳转到登录页面

4、后端接口风格使用 REST规范

5、数据库采用了非关系型数据库MongoDB



