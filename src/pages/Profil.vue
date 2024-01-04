<template>
  
    
    <div class="userStadt">Ulm</div>
    <div class="stadt">{{ $t('Stadt') }}</div>
    <div class="userPLZ">01010</div>
    <div class="PLZ">{{ $t('PLZ') }}</div>
    <div class="userStrasze">teststraße14</div>
    <div class="strasze">{{ $t('Straße') }}</div>
    <a class="userMail" href="mailto:driver01@gmail.com" target="_blank"
      >driver01@gmail.com</a
    >
    <div class="email">{{ $t('E-Mail') }}</div>
    <div class="userName">Driver01</div>
    <div class="benutzername">{{ $t('Benutzername') }}</div>
    <div class="userFullName">Faruk Mercan</div>
    <img class="person-icon" alt="" src="/png-person-icon@2x.png" />
    

  

</template>
<script>
  import { defineComponent } from "vue";
  import MesswerteDropdown from "../components/MesswerteDropdown.vue";

  export default defineComponent({
    name: "Profil",
    components: { MesswerteDropdown },
  });
</script>
<style scoped>

  .userStadt {
    position: absolute;
    top: 605px;
    left: 739px;
    display: inline-block;
    width: 49px;
    height: 38px;
    color: #fff;
  }
  .stadt {
    position: absolute;
    top: 605px;
    left: 447px;
    color: #fff;
  }
  .userPLZ {
    position: absolute;
    top: 559px;
    left: 739px;
    display: inline-block;
    width: 64px;
    height: 38px;
    color: #fff;
  }
  .PLZ {
    position: absolute;
    top: 559px;
    left: 447px;
    color: #fff;
  }
  .userStrasze {
    position: absolute;
    top: 513px;
    left: 739px;
    display: inline-block;
    width: 152px;
    height: 38px;
    color: #fff;
  }
  .strasze {
    position: absolute;
    top: 513px;
    left: 447px;
    color: #fff;
  }
  .userMail{
    position: absolute;
    top: 467px;
    left: 739px;
    text-decoration: underline;
    color: inherit;
    display: inline-block;
    width: 255px;
    height: 38px;
    color: #fff;
  }
  .email {
    position: absolute;
    top: 467px;
    left: 447px;
    color: #fff;
  }
  .userName {
    position: absolute;
    top: 421px;
    left: 739px;
    display: inline-block;
    width: 96px;
    height: 38px;
    color: #fff;
  }
  .benutzername {
    position: absolute;
    top: 421px;
    left: 447px;
    color: #fff;
  }
  .userFullName {
    position: absolute;
    top: 329px;
    left: 597px;
    font-size: var(--font-size-21xl);
    font-weight: 300;
    font-family: var(--font-sansation-light);
    color: #fff;
  }
  .person-icon {
    position: absolute;
    top: 187px;
    left: 651px;
    width: 137px;
    height: 134px;
    object-fit: cover;
    color: #fff;
  }
</style>