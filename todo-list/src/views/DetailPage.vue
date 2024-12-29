<template>
  <div>
    <HeaderWrap />
    <DetailBox />
  </div>
</template>

<script>
import HeaderWrap from "@/components/HeaderWrap";
import DetailBox from "@/components/DetailBox";

export default {
  name: "DetailPage",

  components: {
    HeaderWrap,
    DetailBox,
  },
};
</script>
