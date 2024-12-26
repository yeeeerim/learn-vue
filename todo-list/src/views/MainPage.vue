<template lang="">
  <div>
    <HeaderWrap />
    <InputBox />
  </div>
</template>

<script>
import InputBox from "@/components/InputBox";
import HeaderWrap from "@/components/HeaderWrap";

export default {
  name: "MainPage",
  components: { InputBox, HeaderWrap },
};
</script>
