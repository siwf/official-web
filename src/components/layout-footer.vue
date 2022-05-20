<template>
  <!-- 页脚区域  -->
  <div class="footer">
    <b-container>
      <div class="footer-cont">
        <div class="footer-left">
          <!--  -->
          <img src="@/assets/img/logo@2x.png" width="100px" />
        </div>
        <div class="footer-center">
          <div class="about-us">
            <div class="footer-center-title">About Us</div>
            <ul>
              <li>Company</li>
              <li>Sustainable</li>
            </ul>
          </div>
          <div class="product-development">
            <div class="footer-center-title">PRODUCT&Development</div>
            <ul>
              <li>NMP（with SAS）</li>
              <li>NMP（with SAS）</li>
              <li>NMP（with SAS）</li>
              <li>NMP（with SAS）</li>
              <li>NMP（with SAS）</li>
              <li>NMP（with SAS）</li>
              <li>NMP（with SAS）</li>
            </ul>
          </div>
          <div class="news">
            <div class="footer-center-title">News</div>
            <ul>
              <li>NMP（with SAS）</li>
              <li>NMP（with SAS）</li>
            </ul>
          </div>
        </div>
        <div class="footer-right">
          <!--  -->
          <div class="footer-right-top">
            <div class="link-company">
              <div class="link-area-f"></div>
              <div class="link-area-camera"></div>
              <div class="link-area-in"></div>
              <div class="link-area-bird"></div>
            </div>
          </div>
          <span class="concat-hotline">Service Hotline</span>
          <span class="concat-phone">0543-8193588</span>
        </div>
      </div>
      <div class="copyright-topline-area"><div class="copyright-topline"></div></div>
      <div class="copyright">© Copyright 2004-2014 BYN Chemical Co., Ltd All Rights Reserved</div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
/*  */
.footer {
  // height: 422px;
  background-color: #3e3e3e;
}
.footer-cont {
  display: flex;
  justify-content: space-between;
  height: 361px;
  margin: 0 auto;
  padding-top: 43px;
  // padding-left: 156px;
  // padding-right: 156px;
}
.copyright {
  height: 61px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.3);
  line-height: 61px;
  padding-left: 156px;
  padding-right: 156px;
}

.copyright-topline-area {
  padding-left: 156px;
  padding-right: 156px;
}
.copyright-topline {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.link-company {
  display: flex;
  justify-content: space-between;
}
.link-area-f {
  width: 40px;
  height: 40px;
  background: url(@/assets/img/link_f.png) 0px 0px no-repeat;
}

.link-area-camera {
  width: 40px;
  height: 40px;
  background: url(@/assets/img/link_camera.png) 0px 0px no-repeat;
  margin-top: 1px;
  margin-left: 32px;
}

.link-area-in {
  width: 40px;
  height: 40px;
  background: url(@/assets/img/link_in.png) 0px 0px no-repeat;
  margin-left: 32px;
}
.link-area-bird {
  width: 40px;
  height: 40px;
  background: url(@/assets/img/link_bird.png) 0px 0px no-repeat;
  margin-left: 32px;
}
.footer-center {
  display: flex;
  justify-content: space-around;
  flex: 1;
}

.footer-right {
  display: flex;
  flex-direction: column;
}

.concat-hotline {
  height: 26px;
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 26px;
  text-align: left;
  margin: 16px 0 0 1px;
}

.concat-phone {
  height: 26px;
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  line-height: 26px;
  text-align: left;
  margin: 4px 0 0 1px;
}
.footer-center-title {
  height: 26px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  line-height: 26px;
}
li {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  line-height: 26px;
}

.footer-right-top:after {
  content: ' ';
  display: block;
  width: 83%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 32px;
}

/*    适配手机 开始    */
@media screen and(max-width: 768px) {
  .footer {
    // height: 317px;
  }
  .footer-left {
    display: none;
  }
  .footer-center {
    display: none;
  }
  .footer-right {
    align-items: center;
  }
  .footer-cont {
    height: 208px;
    padding: 40px 60px 0;
  }
  .footer-right-top:after {
    width: 60px;
    margin: 0 auto;
  }
  .copyright {
    height: 108px;
    padding: 32px 52px 0;
    text-align: center;
    line-height: 26px;
  }
  .copyright-topline-area {
    padding: 0 83px;
  }
}
/*    适配手机 结束     */
</style>
