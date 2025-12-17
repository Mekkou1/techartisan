<template>
    <router-link :to="link" class="en-savoir-plus-button">
      En savoir plus
    </router-link>
  </template>
  
  <script>
  export default {
    name: 'ButtonGen',
    props: {
      link: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .en-savoir-plus-button {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 10px;
    font-size: 16px;
    color: white;
    background-color: #42b983;
    border: none;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .en-savoir-plus-button:hover {
    background-color: #369970;
  }
  </style>
  