<template>
  <div class="md:w-[370px] w-max flex flex-col gap-[8px] p-4 shadow-md">
    <img
      src="~/assets/Logo.png"
      alt="logo"
      class="w-[120px] h-[40px] self-center"
    />
    <p class="text-center font-bold text-[#101828]">Login to your account</p>
    <p class="text-center">Welcome back! Please enter your details.</p>
    <div class="flex flex-col gap-[12px] mt-[12px]">
      <div>
        <VInput
          wrapper-class="mb-2"
          v-model="username"
          :value="username"
          name="Email"
          label="Email"
          placeholder="Your Email"
        />
        <VInput
          wrapper-class="mb-2"
          v-model="password"
          :value="password"
          name="password"
          label="Password"
          placeholder="Your Password"
          @keyup.enter="mySignInHandler({ username, password })"
        />
      </div>
      <div class="flex justify-between">
        <VCheckbox label="Remember for 30 days" />
        <p class="text-primary">Forgot Password</p>
      </div>
      <div class="flex flex-col gap-[12px]">
        <button
          class="btn-login"
          @click="mySignInHandler({ username, password })"
        >
          Sign In
        </button>
        <button class="btn-github">Sign in with github</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { signIn } = useAuth();
const { username, password } = reactive({
  username: "",
  password: "",
});

const mySignInHandler = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  console.log(username, password);
  if (!username || !password)
    return alert("Please enter your username and password");

  const data = await signIn("credentials", {
    username,
    password,
    redirect: false,
  });
  if (data?.error) return alert("Invalid username or password");
  return navigateTo("/", { external: true });
};
</script>

<style scoped>
button {
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

.btn-login {
  border: 1px solid #0984dd;
  background: #0984dd;
  color: #fff;
}

.btn-github {
  border: 1px solid #d0d5dd;
  background: #fff;
}
</style>
