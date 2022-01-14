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

  <section>
    <div class="about">
      <div class="about-title">
        <h2>
          什麼是
          <span class="text-pink">賣Eshop</span>
          ?
        </h2>
      </div>
      <div class="about-content">
        <p>
          你只需要
          <span class="text-pink">開團銷售賺分潤</span>
          <br />後續訂單、出貨、售後等服務都由 賣Eshop 幫您處理
        </p>
      </div>
    </div>
  </section>

  <section>
    <div class="card">
      <div class="card-top">
        <div class="card-top-image">
          <img src="../assets/mainBanner01.png" alt="卡片圖片" />
        </div>
        <div class="card-top-title">
          <h3>如何找到優質、熱心的商品？</h3>
        </div>
      </div>
      <div class="card-bottom">
        <div class="card-bottom-content">
          <div class="card-bottom-title">
            <p>
              賣Eshop 嚴格把關上百件商品，只為提供您找到最好賣的時
              <br />下夯品！
            </p>
          </div>
          <div class="card-bottom-listTitle">
            <div class="card-bottom-listTitle-content">
              <p>擁有熱銷團購商品列表</p>
              <span class="material-icons-outlined">task_alt</span>
            </div>
            <div class="card-bottom-listTitle-content">
              <p>各產業優質貨源：食品、家電、生活、旅遊、美妝</p>
              <span class="material-icons-outlined">task_alt</span>
            </div>
          </div>
        </div>

        <div class="card-bottom-image">
          <img src="../assets/mainBanner01.png" alt="卡片圖片" />
          <div class="card-bottom-image-title">
            <p class="text-pink">
              賣Eshop
              <br />小助理
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-top">
        <div class="card-top-image">
          <img src="../assets/mainBanner01.png" alt="卡片圖片" />
        </div>
        <div class="card-top-title">
          <h3>如何找到優質、熱心的商品？</h3>
        </div>
      </div>
      <div class="card-bottom">
        <div class="card-bottom-title">
          <p>
            賣Eshop 嚴格把關上百件商品，只為提供您找到最好賣的時
            <br />下夯品！
          </p>
        </div>
        <div class="card-bottom-image">
          <div class="card-top-image">
            <img src="../assets/mainBanner01.png" alt="卡片圖片" />
          </div>
        </div>
      </div>
    </div>
  </section>
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
  background-color: #fb8609;
  height: 630px;
  .content {
    display: flex;
    max-width: 1480px;
    justify-content: center;
    align-items: center;
    position: relative;

    .left-content {
      display: flex;
      flex-direction: column;
      text-align: left;
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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 326px;
        height: 326px;
        color: #312e5f;
        font-size: 54px;
        line-height: 70px;
        font-weight: bold;
        background-color: #fff;
      }
    }
    .content-btn {
      position: absolute;
      bottom: 30px;
      button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 285px;
        height: 105px;
        color: #fff;
        font-size: 32px;
        border: 0;
        border-radius: 30px;
        background: #fc0a52;
        box-shadow: inset -50px 50px 100px #b00739,
          inset 50px -50px 100px #ff0d6b;
        span {
          font-size: 32px;
        }
      }
    }
  }
}

.about {
  margin-top: 105px;
  font-weight: bold;
  .about-title {
    font-size: 46px;
    margin-bottom: 32px;
  }
  .about-content {
    font-size: 30px;
    line-height: 44px;
  }
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  font-size: 38px;
  font-weight: 500;
  .card-top {
    display: flex;
    margin-bottom: 160px;
    .card-top-image {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      bottom: 33px;
      left: 20px;
      img {
        width: 215px;
        height: 250px;
        background-size: cover;
      }
    }
    .card-top-title {
      display: flex;
      padding: 40px 50px;
      width: 936px;
      height: 110px;
      align-items: center;
      background-color: #f1f3f4;
      border-radius: 30px;
      h3 {
        text-align: left;
      }
    }
  }
  .card-bottom {
    display: flex;
    margin-bottom: 160px;
    .card-bottom-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 940px;
      height: 295px;
      background-color: #ef4a30;
      padding: 38px 65px 18px 29px;
      color: #fff;
      text-align: left;
      font-size: 32px;
      border-radius: 30px;
      .card-bottom-title {
        margin: 20px;
      }
      .card-bottom-listTitle {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 905px;
        height: 145px;
        // margin-top: 20px;
        margin: 15px;
        padding: 20px;
        background-color: #fff;
        border-radius: 30px;
        color: #000;
        .card-bottom-listTitle-content {
          display: flex;
          flex-direction: row-reverse;
          justify-content: start;
          p {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
            color: #fc0a52;
            margin-right: 20px;
          }
        }
      }
    }
    .card-bottom-image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      bottom: 33px;
      right: 20px;
      img {
        width: 215px;
        height: 250px;
        background-size: cover;
      }
      .card-bottom-image-title {
        font-size: 32px;
        line-height: 39px;
      }
    }
  }
}

.text-pink {
  color: #fc0a52;
}
</style>
