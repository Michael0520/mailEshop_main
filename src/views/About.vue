<template>
  <header>
    <div class="logo">
      <img src="../assets/logo01.png" alt="meimaii 美賣" class />
    </div>
    <div class="nav-bar">
      <ul class="list">
        <li>
          首頁
          <span>|</span>
        </li>
        <li>
          如何開團
          <span>|</span>
        </li>
        <li>
          開團分潤
          <span>|</span>
        </li>
        <li>
          常見問題
          <span>|</span>
        </li>
        <li>
          <button class="list-btn">立即加入</button>
        </li>
      </ul>
    </div>
  </header>

  <main>
    <div class="content">
      <div class="left-content">
        <div class="left-title">
          <h2>還在煩惱</h2>
          <h1>有什麼好商品可以團購？</h1>
        </div>
        <div class="left-subTitle">
          <span>\ 賣Eshop 幫您解決 /</span>
        </div>
        <button class="left-content-btn">立即加入</button>
      </div>
      <div class="right-content">
        <div class="right-image">
          <img src="../assets/mainBanner_phone.svg" alt="phone-image" />
        </div>
        <div class="right-box">
          <h1>
            可能是
            <br />一個商品
          </h1>
        </div>
      </div>
      <div class="content-btn">
        <button>
          開始合作賣一下
          <span class="material-icons-outlined">expand_more</span>
        </button>
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
header {
  height: 169px;
  margin: 40px 206px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    img {
      width: 290px;
      height: 75px;
    }
  }
  .nav-bar {
    display: flex;
    .list {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        font-size: 32px;
      }
      span {
        margin: 0 34px;
      }
      .list-btn {
        width: 223px;
        height: 90px;
        font-size: 32px;
        color: #fff;
        text-align: center;
        border: 0;
        border-radius: 90px;
        background: #fd6b25;
        box-shadow: inset -50px 50px 100px #be501c,
          inset 50px -50px 100px #ff862e;
      }
    }
  }
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fb8609;
  height: 630px;
  .content {
    display: flex;
    max-width: 1480px;
    justify-content: center;
    align-items: center;
    // padding: 120px 0px 150px 0px;

    .left-content {
      display: flex;
      flex-direction: column;
      text-align: left;
      // margin: 0px 0px 150px 66px;
      color: #fff;
      .left-title {
        h1 {
          font-size: 64px;
          margin-bottom: 38px;
        }
        h2 {
          font-size: 52px;
          margin-bottom: 32px;
        }
      }
      .left-subTitle {
        font-size: 40px;
        margin-bottom: 16px;
      }
      .left-content-btn {
        width: 236px;
        height: 96px;
        font-size: 32px;
        color: #be501c;
        border: 0;
        border-radius: 90px;
        border-radius: 90px;
        background: #ffffff;
        box-shadow: inset -50px 50px 100px #bfbfbf,
          inset 50px -50px 100px #ffffff;
      }
    }
    .right-content {
      display: flex;
      // position: relative;
      .right-image {
        position: relative;
        bottom: -110px;
        img {
          align-self: end;
          width: 392px;
          background-size: cover;
        }
      }
      .right-box {
        width: 326px;
        height: 326px;
        background-color: #fff;
        color: #312e5f;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 54px;
      }
    }
  }
}
</style>
