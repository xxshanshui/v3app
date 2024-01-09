<template>
  <div>
    <div class="tubiao">
      <span class="icon-icon_github iconfont lll"></span>
    </div>
    <div class="top">
      <ul>
        <li>
          <div class="left">
            <span class="icon-yonghuming iconfont iconone"></span>
          </div>
          <div class="right">
            <span>New Visits</span>
            <h3>102，400</h3>
          </div>
        </li>
        <li>
          <div class="left">
            <span class="icon-xinxi iconfont icontow"></span>
          </div>
          <div class="right">
            <span>Messages</span>
            <h3>81,212</h3>
          </div>
        </li>
        <li>
          <div class="left">
            <span class="icon-qianqian- iconfont iconthree"></span>
          </div>
          <div class="right">
            <span>New Visits</span>
            <h3>102，400</h3>
          </div>
        </li>
        <li>
          <div class="left">
            <span class="icon-gouwuchefill iconfont iconfour"></span>
          </div>
          <div class="right">
            <span>Shoppings</span>
            <h3>13,600</h3>
          </div>
        </li>
      </ul>
    </div>
    <div class="middle">
      <zhexian></zhexian>
    </div>

    <div class="bottom">
      <div class="box">
        <leida></leida>
      </div>
      <div class="box">
        <bingtu></bingtu>
      </div>
      <div class="box">
        <zhuzhuang></zhuzhuang>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserFilled, ChatDotSquare } from '@element-plus/icons-vue'
import zhexian from '../components/echarts/echarts/zhexian'
import leida from '../components/echarts/echarts/leida'
import bingtu from '../components/echarts/echarts/bingtu'
import zhuzhuang from '../components/echarts/echarts/zhuzhuang.vue'
</script>

<style lang="scss" scoped>
.tubiao {
  border-style: solid;
  border-width: 0px 0px 70px 70px;
  border-color: transparent transparent #40c9c6 transparent;
  width: 0px;
  height: 0px;
  transform: rotate(-91deg);
  position: absolute;
  right: 0;
  top: 50px;
  // background: ;
  .lll {
    position: absolute;
    font-size: 40px;
    top: 24px;
    right: 4px;
    color: #fff;
    // background-color: ;
    transform: rotate(138deg);
  }
}

.bottom {
  width: 100%;
  height: 300px;
  // border: 1px solid #000;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  .box {
    
    width: 32%;
    // border: 1px solid #000;
    background-color: #fff;
  }
}

.top {
  width: 100%;
  margin-top: 50px;

  ul {
    display: flex;
    justify-content: space-between;

    li:hover .iconone {
      background-color: #40c9c6;
      border-radius: 5px;
      color: #fff !important;
    }

    li:hover .icontow {
      border-radius: 5px;
      background-color: #36a3f7;
      color: #fff !important;
    }

    li:hover .iconthree {
      border-radius: 5px;
      background-color: #f4516c;
      color: #fff !important;
    }

    li:hover .iconfour {
      border-radius: 5px;
      background-color: #34bfa3;
      color: #fff !important;
    }

    li {
      display: flex;
      justify-content: space-between;
      width: 23%;
      background-color: #fff;
      height: 100px;
      cursor: pointer;
      box-shadow: 0 0 5px gray;

      .left {
        // padding-left: 20px;
        width: 100px;
        line-height: 100px;
        text-align: center;

        .iconone {
          padding: 10px 10px;
          margin-top: 10px;
          font-size: 60px;
          color: #40c9c6;
        }

        .icontow {
          padding: 10px 10px;
          margin-top: 10px;
          font-size: 60px;
          color: #36a3f7;
        }

        .iconthree {
          padding: 10px 10px;
          margin-top: 10px;
          font-size: 60px;
          color: #f4516c;
        }

        .iconfour {
          padding: 10px 10px;
          margin-top: 10px;
          font-size: 60px;
          color: #53c9b1;
        }
      }

      .right {
        padding-right: 20px;
        margin-top: 20px;

        span {
          color: #8c8c8c;
        }

        h3 {
          margin-top: 5px;
          color: #666666;
        }
      }
    }
  }
}

.middle {
  background-color: #fff;
  width: 100%;
  height: 350px;
  margin-top: 30px;
}
</style>
