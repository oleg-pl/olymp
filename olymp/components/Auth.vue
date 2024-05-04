<script setup>
const isSignUp = ref(true);
</script>
<template>
    <div>
      <SignUp v-if="isSignUp" />
      <SignIn v-else />
      <button @click="isSignUp = !isSignUp">
        {{
          isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account yet? Sign Up"
        }}
      </button>
    </div>
  </template>
  
 
  
  <style scoped></style>