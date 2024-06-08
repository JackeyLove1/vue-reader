<script setup>

</script>

<template>
  <div class="p-[20px] login">
    <div class="flex justify-start">
      <div>X</div>
    </div>
    <h2 class="title">欢迎登录</h2>
    <p>发现更多精彩好书</p>
    <form class="login-form">
      <input type="text" placeholder="请输入手机号">
      <input type="password" placeholder="请输入密码">
      <div class="agree">
        <input type="checkbox">
        <span>阅读并同意《用户服务协议》及《隐私政策》</span>
      </div>
      <button>登录</button>
    </form>
    <div class="login-way">
      <span>手机验证码登录</span>
      <span>忘记密码</span>
    </div>
    <div class="mt-[20px] text-gray-400 text-center text-xs">其他登录方式</div>
    <div class="flex flex-row justify-center mt-6">
      <div class="flex flex-col items-center mx-4">
        <div class="icon">
          <i class="iconfont icon-weixin"></i>
        </div>
        <span class="icon-name">微信</span>
      </div>
      <div class="flex flex-col items-center mx-4">
        <div class="icon">
          <i class="iconfont icon-QQ"></i>
        </div>
        <span class="icon-name">QQ</span>
      </div>
    </div>
  </div>
</template>

<style>
.login .title {
  font-size: 24px;
  letter-spacing: 2px;
  margin-top: 18px;
  font-weight: 700;
}

.login p {
  font-weight: 500;
  letter-spacing: 3px;
}

.login .login-form > input {
  width: 100%;
  margin-top: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
  font-size: 16px;
  letter-spacing: 1px;
}

.login .login-form input::placeholder {

}

.login .agree {
  height: 50px;
  font-size: 12px;
  @apply flex flex-row items-center space-x-1
}

.login button {
  width: 100%;
  background-color: var(--bgcolor);
  height: 40px;
  font-weight: 700;
  color: white;
  font-size: 16px;
}

.login .login-way {
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  @apply flex flex-row justify-between items-center;
}

.login .icon {
  @apply w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center
}

.login .icon-name {
  @apply mt-2 text-gray-600 text-xs
}
</style>