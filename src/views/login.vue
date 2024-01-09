<template>
  <div class="box">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" status-icon>
      <h3>ELADMIN 后台管理系统</h3>
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" placeholder="请输入密码" show-password />
      </el-form-item>
      <el-form-item prop="code" style="display: flex">
        <el-input style="width: 150px" v-model="ruleForm.code" placeholder="请输入验证码" />
        <el-image style="width: 100px; height: 100px" :src="params.url" />
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="params.remember" />
        <div>记住我</div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 80%; text-align: center; align-items: center" @click="qwe"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { getImg, login } from '../API/http'
import { ref, reactive } from 'vue'
import { RuleFrom } from '../utils/defind'
import { setToken } from '../utils/auth'
import { useRouter } from 'vue-router'
const router = useRouter()
import type { FormInstance, FormRules } from 'element-plus'
import { encrypt } from '../utils/jm'
// const bcrypt = require('bcryptjs')
import { JSEncrypt } from 'jsencrypt'
const ruleForm = reactive<RuleForm>({
  username: '',
  password: '',
  code: '',
  uuid: ''
})
const params = reactive<RuleFrom>({
  url: '',
  remember: ''
})

const getlistimg = () => {
  getImg().then((res) => {
    // console.log('-----------------------')
    // console.log(res)
    // console.log('-----------------------')
    params.url = res.img
    ruleForm.uuid = res.uuid
  })
}
const qwe = () => {
  ruleForm.password = encrypt(ruleForm.password)
  login({ username: ruleForm.username, password: ruleForm.password, code: ruleForm.code, uuid: ruleForm.uuid }).then(
    (res) => {
      // console.log(res)
      setToken(res.token)
      router.push('/')
    }
  )
}
const rules = reactive<RuleFrom>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})
getlistimg()
</script>
<style lang="scss">
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(../assets/images/background.webp);
}
.el-input {
  width: 300px;
  margin-right: 80px;
}
h3 {
  margin-top: 20px;
  width: 100%;
  margin-bottom: 30px;
  height: 20px;
  line-height: 20px;
  // align-items: center;
  text-align: center;
  font-weight: 700;
}
.el-form {
  background-color: #fff;
  border-radius: 10px;
  height: 400px;
}
</style>
