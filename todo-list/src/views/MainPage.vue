<template lang="">
  <div>
    <HeaderWrap />
    <InputBox />
    <WorkBox />
  </div>
</template>

<script>
import InputBox from "@/components/InputBox";
import HeaderWrap from "@/components/HeaderWrap";
import WorkBox from "@/components/WorkBox";

export default {
  name: "MainPage",
  components: { InputBox, HeaderWrap, WorkBox },
};
</script>
