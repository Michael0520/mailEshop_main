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
    <!-- <div class="card">
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
    </div>-->
    <div class="card" v-for="(item, index) in cardList" :key="index">
      <!-- <div class="index">第 {{ index + 1 }} 筆資料</div> -->
      <!-- <div class="index">{{ item.img }}</div> -->
      <div class="card-top">
        <div class="card-top-image">
          <img :src="require(`@/assets/${item.name}.png`)" alt="卡片圖片" />
        </div>
        <div class="card-top-title">
          <h3>{{ item.topcardTitle }}</h3>
        </div>
      </div>
      <div class="card-bottom">
        <div class="card-bottom-content">
          <div class="card-bottom-title">
            <p>{{ item.bottomcardTitle }}</p>
          </div>
          <div class="card-bottom-listTitle">
            <div
              class="card-bottom-listTitle-content"
              v-for="(innerItem, index) in item.bottomcardList"
              :key="index"
            >
              <p>{{ innerItem }}</p>
              <span class="material-icons-outlined">task_alt</span>
            </div>
          </div>
        </div>

        <div class="card-bottom-image">
          <img src="../assets/mainBanner01.png" alt="卡片圖片" />
          <div class="card-bottom-image-title">
            <p class="text-pink">{{ item.bottomcardMemberTitle }}</p>
            <p class="text-pink">{{ item.bottomcardMember }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- feedback -->
  <section>
    <div class="feedback-section">
      <div class="feedback-title">
        <h2>好評推薦</h2>
        <p>
          來自合作夥伴們的
          <span class="text-pink">真實回饋</span>
        </p>
      </div>
      <div class="feedback-cardSection">
        <div class="feedback-card">
          <div class="feedback-content">
            <div class="feedback-card-title">
              <p class="text-pink">大樓福委</p>
            </div>
            <div class="feedback-card-text">
              <p>每週都會上新品很接時節，有很多商品可以選擇，商品分類完善，而且可以讓團員自己收貨很方便。團可以不需要承擔囤貨的風險。</p>
            </div>
          </div>
          <div class="feedback-member">
            <div class="feedback-member-image">
              <img src alt />
            </div>
            <div class="feedback-member-title">
              <p>Jmebaby's mall</p>
            </div>
          </div>
        </div>
        <div class="feedback-card">
          <div class="feedback-content">
            <div class="feedback-card-title">
              <p class="text-pink">大樓福委</p>
            </div>
            <div class="feedback-card-text">
              <p>每週都會上新品很接時節，有很多商品可以選擇，商品分類完善，而且可以讓團員自己收貨很方便。團可以不需要承擔囤貨的風險。</p>
            </div>
          </div>
          <div class="feedback-member">
            <div class="feedback-member-image">
              <img src alt />
            </div>
            <div class="feedback-member-title">
              <p>Jmebaby's mall</p>
            </div>
          </div>
        </div>
        <div class="feedback-card">
          <div class="feedback-content">
            <div class="feedback-card-title">
              <p class="text-pink">大樓福委</p>
            </div>
            <div class="feedback-card-text">
              <p>每週都會上新品很接時節，有很多商品可以選擇，商品分類完善，而且可以讓團員自己收貨很方便。團可以不需要承擔囤貨的風險。</p>
            </div>
          </div>
          <div class="feedback-member">
            <div class="feedback-member-image">
              <img src alt />
            </div>
            <div class="feedback-member-title">
              <p>Jmebaby's mall</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- more-section -->
  <section>
    <div class="more-section">
      <p>立即體驗</p>
      <h2>簡單邁出下一個熱銷產品</h2>
      <button>開始賣一下</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          "id": 1,
          "topcardTitle": "如何找到優質、熱銷的產品",
          "bottomcardTitle": "賣Eshop 嚴格把關上百件商品，只為提供您找到最好賣的時下夯品！",
          "bottomcardList": ["擁有熱銷團購商品列表", "各產業優質貨源：食品、家電、生活、旅遊、美妝"],
          "bottomcardMemberTitle": "賣Eshop",
          "bottomcardMember": "小助理",
          "name": "cardImage"
        },
        {
          "id": 2,
          "topcardTitle": "如何找到優質、熱銷的產品",
          "bottomcardTitle": "賣Eshop 嚴格把關上百件商品，只為提供您找到最好賣的時下夯品！",
          "bottomcardList": ["擁有熱銷團購商品列表", "各產業優質貨源：食品、家電、生活、旅遊、美妝"],
          "bottomcardMemberTitle": "賣Eshop",
          "bottomcardMember": "小助理",
          "name": "mainBanner01"
        },
        {
          "id": 3,
          "topcardTitle": "如何找到優質、熱銷的產品",
          "bottomcardTitle": "賣Eshop 嚴格把關上百件商品，只為提供您找到最好賣的時下夯品！",
          "bottomcardList": ["擁有熱銷團購商品列表", "各產業優質貨源：食品、家電、生活、旅遊、美妝"],
          "bottomcardMemberTitle": "賣Eshop",
          "bottomcardMember": "小助理",
          "name": "cardImage"

        },
        {
          "id": 4,
          "topcardTitle": "如何找到優質、熱銷的產品",
          "bottomcardTitle": "賣Eshop 嚴格把關上百件商品，只為提供您找到最好賣的時下夯品！",
          "bottomcardList": ["擁有熱銷團購商品列表", "各產業優質貨源：食品、家電、生活、旅遊、美妝"],
          "bottomcardMemberTitle": "賣Eshop",
          "bottomcardMember": "小助理",
          "name": "cardImage"

        },

      ]
    }
  },
  methods: {
    backgroundStyles(image) {
      return {
        // any other styles you might need to add on as an example
        "background-image": `url(${image})`,
        // "src": `url(${image})`,
      };
    },
  },
}
</script>

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
  margin-bottom: 120px;
  .card-top {
    display: flex;
    margin-bottom: 110px;
    .card-top-image {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      bottom: 33px;
      left: 20px;
      img {
        width: 215px;
        height: 280px;
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
      top: 33px;
      right: 20px;
      img {
        width: 215px;
        height: 280px;
        background-size: cover;
      }
      .card-bottom-image-title {
        padding-left: 34px;
        font-size: 32px;
        line-height: 39px;
        text-align: left;
      }
    }
  }
}
.feedback-section {
  height: 760px;
  background-color: #e4e8e9;
  padding: 96px 64px;
  .feedback-title {
    padding: 98px 0;
    h2 {
      font-size: 52px;
      padding-bottom: 23px;
    }
    p {
      font-size: 36px;
    }
  }
  .feedback-cardSection {
    display: flex;
    font-size: 32px;
    font-weight: bold;

    .feedback-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      max-width: 700px;
      width: 100%;
      height: 400px;
      padding: 35px 50px;
      margin-right: 35px;
      background-color: #fff;
      border-radius: 30px;
      .feedback-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .feedback-card-title {
          p {
            margin-bottom: 30px;
          }
        }
        .feedback-card-text {
          p {
            text-align: left;
            line-height: 44px;
          }
        }
      }
      .feedback-member {
        display: flex;
        align-items: center;

        .feedback-member-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #aaa;
          margin-right: 18px;
          img {
          }
        }
        .feedback-member-title {
          p {
          }
        }
      }
    }
  }
}
.more-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  color: #fff;
  font-weight: bold;
  background-color: #fc930a;
  p {
    font-size: 40px;
    padding-bottom: 28px;
  }
  h2 {
    font-size: 60px;
    padding-bottom: 56px;
  }
  button {
    width: 260px;
    font-size: 32px;
    background-color: #fff;
    color: #fc930a;
    border-radius: 80px;
    border: 0;
    padding: 20px 50px;
  }
}
.text-pink {
  color: #fc0a52;
}
</style>


