<template>
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE-edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login Form in HTML and CSS</title>
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
  <div class="wrapper">
    <form @submit.prevent="submitForm">
      <h1>Fahrzeug Hinzufügen</h1>

      <div class="input-box">
        <div class="input-field">
          <input type="text" v-model="Name" placeholder="Marke" required>
          <i class='bx bx-copyright'></i>
        </div>
        <div class="input-field">
          <input type="text" v-model="username" placeholder="Modell" required>
          <i class='bx bxs-car' ></i>
        </div>
      </div>

      <div class="input-box">
        <div class="input-field">
          <input type="number" v-model="phoneNumber" placeholder="VIN Nummer" required>
          <i class='bx bxs-key'></i>


        </div>
        <div class="input-field">
          <input type="number" v-model="phoneNumber" placeholder="Erstzulassung" required>
          <i class='bx bx-calendar'></i>
        </div>
      </div>

      <div class="input-box">
        <div class="input-field">
          <input type="password" v-model="password" placeholder="Farbe" required>
          <i class='bx bxs-palette' ></i>
        </div>
      </div>

     
      <button type="submit" class="btn">Hinzufügen</button>
    </form>
  </div>
</body>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      username: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      declaration: false,
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted!');
      // You can access form data using this.fullName, this.username, etc.
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap");



* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url('/login-hintergrund.png') no-repeat;
    background-size: cover;
    background-position: center;

}

.wrapper {
    width: 750px;
    background: rgba(255, 255, 255, .1);
    border: 2px solid rgba(255, 255, 255, .2);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    backdrop-filter: blur(50px);
    border-radius: 10px;
    color: #fff;
    padding: 40px 35px 55px;
    margin: 0 10px;
}

.wrapper h1 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 20px;
}

.wrapper .input-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.input-box .input-field {
    position: relative;
    width: 48%;
    width: 50%;
    margin: 13px 0;
}


.input-box .input-field input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    outline: none;
    font-size: 16px;
    color: #fff;
    border-radius: 6px;
    padding: 15px 15px 15px 40px;
}

.input-box .input-field input::placeholder {
    color: #fff;
}

.input-box .input-field i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
}

.wrapper label {
    display: inline-block;
    font-size: 14.5px;
    margin: 10px 0 23px;
}

.wrapper label input {
    accent-color: #fff;
    margin-right: 5px;
}


.wrapper .btn {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    color: #333;
    font-weight: 600;
}


@media(max-width: 576px) {
    .input-box .input-field {
        width: 100%;
        margin: 10px 0;
    }
}
</style>
