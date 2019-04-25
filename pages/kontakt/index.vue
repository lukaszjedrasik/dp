<template>
  <div class="container">
    <h1>Nails | Kontakt</h1>
    <Hamburger></Hamburger>
    <div class="contact">
      <div>
        <h2>
          <span>Dusiowe Pazurki</span>
        </h2>
        <h2>
          <i class="fas fa-phone"></i> 591-591-591
        </h2>
        <h2>
          <span>Pn - Pt</span> 9:00 - 20:00
        </h2>
        <h2>
          <span>Sb 10:00</span> - 16:00
        </h2>
        <h2>
          <span>Ndz</span> Nieczynne
        </h2>
      </div>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79626.93062274678!2d21.08376280377523!3d51.415151640597195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718592aa02cdbc7%3A0xe530d6c89ff4d21b!2sRadom!5e0!3m2!1spl!2spl!4v1556118814252!5m2!1spl!2spl"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components/UI/Hamburger";

export default {
  components: { Hamburger },
  transition: "slide",
  layout: "DesktopMenu",
  middleware: "autologin"
};
</script>

<style scoped lang='scss'>
.container {
  height: 100vh;
  background-color: #ffcbcf;
  color: #fff;

  h1 {
    margin: 1rem 0 0 3rem;
    font-size: 3rem;
    font-weight: 300;
    text-align: left;
    font-family: "Over the Rainbow";
  }
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    font-family: "Roboto";
    line-height: 1.5;
    h2 {
      font-size: 2rem;
      font-weight: 400;
      span {
        font-weight: 700;
      }
    }
  }
  .map {
    margin-top: 2rem;
    text-align: center;
    iframe {
      width: 85%;
      height: 200px;
    }
  }
}
@media (min-width: 1024px) {
  .container {
    h1 {
      display: none;
    }
    .contact {
      margin: 12rem auto 4rem auto;
    }
  }
}
</style>