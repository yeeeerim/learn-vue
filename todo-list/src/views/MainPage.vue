<template lang="">
  <div>
    <HeaderWrap />
    <DetailBox />
    <InputBox />
  </div>
</template>

<script>
import InputBox from "@/components/InputBox";
import HeaderWrap from "@/components/HeaderWrap";
import DetailBox from "@/components/DetailBox";

export default {
  name: "MainPage",
  components: { InputBox, HeaderWrap, DetailBox },
};
</script>
