
<template>
  
    
    <img
      class="registrieren-arrow"
      alt=""
      src="/register-pfeil.svg"
      @click="onRegistrierenClick"
    />
    
    
    
    <div class="land">Land</div>
   
    <input type="text" 
      v-model="land"
      class="land-textbox"
      placeholder="Land:"
      @input="validateLand"/>
   
    <div v-if="isLandInvalid" class="error-message-land">Kein valides Land</div>
    
    
    
    <div class="stadt">Stadt</div>
    
    <input type="text" 
      v-model="stadt"
      class="stadt-textbox"
      placeholder="Stadt:"
      @input="validateStadt"/>
    
    <div v-if="isStadtInvalid" class="error-message-stadt">Richtigen Stadtnamen eingeben</div>
    
    
    
    <div class="plz">PLZ</div>
   
    <input type="tel" 
      v-model="plz"
      class="plz-textbox"
      placeholder="PLZ:"
      @keydown.space.prevent=""
      @input="validatePLZ"/>
    
    <div v-if="isPLZInvalid" class="error-message-PLZ">PLZ nicht korrekt</div>
    
    
    
    <div class="hausnr">Hausnr.</div>
    
    <input type="tel" 
      v-model="hausnr"
      class="hausnr-textbox"
      placeholder="Hausnummer:"
      @input="validateHausnr"/>
    
    <div v-if="isHausnrInvalid" class="error-message-hausnr">valide Hausnummer eingeben</div>
    
    
    
    
    <div class="strasze">Straße</div>
    
    <input type="text" 
      v-model="strasze"
      class="strasze-textbox"
      placeholder="Straße:"
      @input="validateStrasze"/>

      <div v-if="isStraszeInvalid" class="error-message-strasze">validen Straßennamen eingeben</div>
    
    
    
    
    <div class="passwort-bestaetigen">Passwort bestätigen</div>

    <input
    type="password"
    v-model="bestaetigen"
    class="bestaetigen-textbox"
    placeholder="Passwort bestätigen:"
    :disabled="passwort === ''"
    @keydown.space.prevent=""
    @input="repeatPasswort"
    />

    <div v-if="PasswortIsNotSame" class="error-message-passwort-wiederholung">Die Passwörter stimmen nicht überein.</div>
    
    
    
  
    <div class="passwort">Passwort</div>
    
    <input type="password" 
      v-model="passwort"
      class="passwort-textbox"
      placeholder="mind 8 Zeichen:"
      @keydown.space.prevent=""
      @input="validatePasswort"/>

    <div v-if="isPasswortInvalid" class="error-message-passwort">Bitte ein passendes Passwort</div>
    
    
    
    
    <div class="name">Name</div>
   
    <input type="text" 
      v-model="name"
      class="name-textbox"
      placeholder="Dein Name:"
      @input="validateName"/>
    
    <div v-if="isNameInvalid" class="error-message-name">Name ist falsch</div>
    
    
    
    
    <div class="vorname">Vorname</div>

    <input type="text" 
      v-model="vorname"
      class="vorname-textbox"
      placeholder="Dein Vorname:"
      @input="validateVorname"
      />
    
    <div v-if="isVornameInvalid" class="error-message-vorname">Vorname ist falsch</div>
    
    
    
    
    <div class="e-mail">E-Mail</div>
    
    <input type="text" 
      v-model="email"
      class="e-mail-textbox"
      placeholder="Deine Email:"
      @input="validateEmail"
      />
    
    <div v-if="isEmailInvalid" class="error-message-email">Bitte Korrekt eingeben</div>
    

    
    <div class="registrieren">Registrieren</div>
    
    <img
      class="cartracker-logo-icon"
      alt=""
      src="/png-cartracker-logo@2x.png"
    />
    
    

</template>
<script>
  import { defineComponent } from "vue";
  import SideBoardRegister from "../components/SideBoardRegister.vue";
  import PortalPopup from "../components/PortalPopup.vue";

  export default defineComponent({
    name: "Register",
    data() {
      return { isSideBoardRegisterOpen: false,
                email:"",
                vorname:"",
                name:"",
                passwort:"",
                bestaetigen:"",
                strasze:"",
                hausnr:"",
                plz:"",
                stadt:"",
                land:"",
                isEmailInvalid:false,
                isVornameInvalid:false,
                isNameInvalid:false,
                isPasswortInvalid:false,
                PasswortIsNotSame:false,
                isStraszeInvalid:false,
                isHausnrInvalid:false,
                isPLZInvalid:false,
                isStadtInvalid:false,
                isLandInvalid:false,
                gespeicherteDaten: [],
              };
    
    },
    components: { SideBoardRegister, PortalPopup },
    methods: {
      
      validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(
this.email
)) {
        this.isEmailInvalid = true;
      } else {
        this.isEmailInvalid = false;
      }
    },
      
      validateVorname(){
        const containsNumber = /\d/.test(this.vorname);

        this.isVornameInvalid=containsNumber;

        if(this.isVornameInvalid){
          this.isVornameInvalid=true;
        } else{
          this.isVornameInvalid=false;
        }
      },

      validateName(){
        const containsNumber = /\d/.test(
this.name
);

        this.isNameInvalid = containsNumber;

        if(this.isNameInvalid){
          this.isNameInvalid=true;
        } else{
          this.isNameInvalid=false;
        }
      },

      validatePasswort(){
        const goodIdea= /^[^\s]{8,}$/;

        this.isPasswortInvalid= !goodIdea.test(this.passwort)

        if(this.isPasswortInvalid){
          this.isPasswortInvalid=true;
        } else{
          this.isPasswortInvalid=false;
        }
      },

      repeatPasswort() {
      if (this.bestaetigen === this.passwort) {
        this.PasswortIsNotSame = false;
      } else {
        this.PasswortIsNotSame = true;
      }
      },

      validateStrasze(){
        const validName = /^[a-zA-Z\s\-_'ßäöüÄÖÜ.]{3,}$/.test(this.strasze);

        this.isStraszeInvalid=!validName;

        if(this.isStraszeInvalid){
          this.isStraszeInvalid=true;
        } else{
          this.isStraszeInvalid=false;
        }
      },

      validateHausnr(){
        const validHausnr = /^(?=.*\d)[a-zA-Z0-9\s\-_]+(?:[\/\s]+[a-zA-Z0-9\s\-_]+)*$/.test(this.hausnr);
        
        this.isHausnrInvalid=!validHausnr;

        if(this.isHausnrInvalid){
          this.isHausnrInvalid=true;
        } else{
          this.isHausnrInvalid=false;
        }
      },

      validatePLZ(){
        const validPLZ= /^\d{5}$/.test(this.plz);

        this.isPLZInvalid=!validPLZ;

        if(this.isPLZInvalid){
          this.isPLZInvalid=true;
        } else{
          this.isPLZInvalid=false;
        }
      },

      validateStadt() {
        const valideStadt = /^[a-zA-Z\s\-]+$/.test(this.stadt);

        this.isStadtInvalid = !valideStadt;

        if (this.isStadtInvalid) {
        this.isStadtInvalid = true;
        } else {
        this.isStadtInvalid = false;
        }
      },
      
      validateLand(){
        const validLand = /^[a-zA-Z\s\-]+$/.test(
this.land
);

        this.isLandInvalid=!validLand;

        if(this.isLandInvalid){
          this.isLandInvalid=true;
        } else{
          this.isLandInvalid=false;
        }
      },

      onRegistrierenClick() {
    
      if (
        this.email.trim() === "" ||
        this.vorname.trim() === "" ||
        this.name.trim() === "" ||
        this.passwort.trim() === "" ||
        this.bestaetigen.trim() === "" ||
        this.strasze.trim() === "" ||
        this.hausnr.trim() === "" ||
        this.plz.trim() === "" ||
        this.stadt.trim() === "" ||
        this.land.trim() === "") {
      
        alert("Bitte fülle die Felder aus.");} 
          
        else if (
        !this.isEmailInvalid &&
        !this.isVornameInvalid &&
        !this.isNameInvalid &&
        !this.isPasswortInvalid &&
        !this.PasswortIsNotSame &&
        !this.isStraszeInvalid &&
        !this.isHausnrInvalid &&
        !this.isPLZInvalid &&
        !this.isStadtInvalid &&
        !this.isLandInvalid) 
        
        {
        this.$router.push("/fahrzeughinzufuegen");
          
        const neuePerson= {
        email: 
this.email
,
        vorname: this.vorname,
        name: 
this.name
,
        stadt: this.stadt,
        passwort: this.passwort,
        plz: this.plz,
        strasze:this.strasze,
        hausnr:this.hausnr,
        land:this.land,
        bestaetigen:this.bestaetigen,
      }
      this.gespeicherteDaten.push(neuePerson);
    } 
      else {
      alert("Bitte überprüfe deine Eingaben und korrigiere Fehler.");
    }
  },
      
      openSideBoardRegister() {
        this.isSideBoardRegisterOpen = true;
      },
      
      closeSideBoardRegister() {
        this.isSideBoardRegisterOpen = false;
      },
    },
  });
</script>
<style scoped>

  .registrieren-arrow {
    position: absolute;
    top: 806.6px;
    left: 1083px;
    width: 25px;
    height: 14.7px;
    cursor: pointer;
    user-select: none;
  }
 
  .land {
    position: absolute;
    top: 786px;
    left: 373px;
    font-weight: 300;
    user-select: none;
  }

  .land-textbox{
    position: absolute;
    top: 790px;
    left: 460px;
    font-weight: 300;
    background-color: transparent;
    border: none; 
    color: #fff;
    padding: 5px; 
    resize: none;
  }
  .stadt {
    position: absolute;
    top: 671px;
    left: 748px;
    font-weight: 300;
    user-select: none;
  }

  .stadt-textbox{
    position: absolute;
    top: 675px;
    left: 850px;
    font-weight: 300;
    background-color: transparent;
    border: none; 
    color: #fff;
    padding: 5px; 
    resize: none;
  }
  .plz {
    position: absolute;
    top: 671px;
    left: 373px;
    font-weight: 300;
    user-select: none;
  }

  .plz-textbox{
    position: absolute;
    top: 675px;
    left: 450px;
    font-weight: 300;
    background-color: transparent;
    border: none; 
    color: #fff;
    padding: 5px; 
    resize: none;
  }
  
  .hausnr {
    position: absolute;
    top: 557px;
    left: 756px;
    font-weight: 300;
    user-select: none;
  }
  .hausnr-textbox{
    position: absolute;
    top: 560px;
    left: 875px;
    font-weight: 300;
    background-color: transparent;
    border: none; 
    color: #fff;
    padding: 5px; 
    resize: none;
  }
  .strasze {
    position: absolute;
    top: 557px;
    left: 373px;
    font-weight: 300;
    user-select: none;
  }

  .strasze-textbox{
    position: absolute;
    top: 560px;
    left: 475px;
    font-weight: 300;
    background-color: transparent;
    border: none; 
    color: #fff;
    padding: 5px; 
    resize: none;
  }
  .passwort-bestaetigen {
    position: absolute;
    top: 446px;
    left: 748px;
    font-weight: 300;
    user-select: none;
  }

  .bestaetigen-textbox{
    position: absolute;
    top: 450px;
    left: 1000px;
    font-weight: 300;
    background-color: transparent;
    border: none; 
    color: #fff;
    padding: 5px; 
    resize: none;
  }

  .passwort {
    position: absolute;
    top: 446px;
    left: 373px;
    font-weight: 300;
    user-select: none;
  }
 
  .passwort-textbox{
    position: absolute;
    top: 450px;
    left: 500px;
    font-weight: 300;
    background-color: transparent;
    border: none; 
    color: #fff;
    padding: 5px; 
    resize: none;
  }
  .name {
    position: absolute;
    top: 336px;
    left: 748px;
    font-weight: 300;
    user-select: none;
  }

  .name-textbox{
    position: absolute;
    top: 340px;
    left: 850px;
    font-weight: 300;
    background-color: transparent;
    border: none; 
    color: #fff;
    padding: 5px; 
    resize: none;
  }
  
  .vorname {
    position: absolute;
    top: 336px;
    left: 373px;
    font-weight: 300;
    user-select: none;
  }

  .vorname-textbox{
    position: absolute;
    top: 340px;
    left: 500px;
    font-weight: 300;
    background-color: transparent;
    border: none; 
    color: #fff;
    padding: 5px; 
    resize: none;
  }
  
  .e-mail {
    position: absolute;
    top: 236px;
    left: 574px;
    font-weight: 300;
    user-select: none;
  }

  .e-mail-textbox{
    position: absolute;
    top: 240px;
    left: 680px;
    font-weight: 300;
    background-color: transparent;
    border: none; 
    color: #fff;
    padding: 5px; 
    resize: none; /* Verhindert die Größenänderung */
  }
  .registrieren {
    position: absolute;
    top: 127px;
    left: 614px;
    font-size: var(--font-size-21xl);
    font-weight: 300;
    user-select: none;
  }
  .cartracker-logo-icon {
    position: absolute;
    top: 62px;
    left: 174px;
    width: 85px;
    height: 67px;
    object-fit: cover;
  }
 


    .error-message-email {
    position: absolute;
    top: 243px;
    left: 860px;
    color: red;
    font-size: 18px;
}

.error-message-vorname {
    position: absolute;
    top: 315px;
    left: 500px;
    color: red;
    font-size: 18px;
}

.error-message-name {
    position: absolute;
    top: 315px;
    left: 848px;
    color: red;
    font-size: 18px;
}

.error-message-passwort {
    position: absolute;
    top: 415px;
    left: 500px;
    color: red;
    font-size: 18px;
}

.error-message-passwort-wiederholung {
    position: absolute;
    top: 415px;
    left: 998px;
    color: red;
    font-size: 18px;
}

.error-message-strasze{
    position: absolute;
    top: 535px;
    left: 475px;
    color: red;
    font-size: 18px;
}

.error-message-hausnr{
    position: absolute;
    top: 535px;
    left: 870px;
    color: red;
    font-size: 18px;
}

.error-message-PLZ{
    position: absolute;
    top: 650px;
    left: 450px;
    color: red;
    font-size: 18px;
}

.error-message-stadt{
    position: absolute;
    top: 650px;
    left: 847px;
    color: red;
    font-size: 18px;
}

.error-message-land{
    position: absolute;
    top: 765px;
    left: 458px;
    color: red;
    font-size: 18px;
}
</style> 