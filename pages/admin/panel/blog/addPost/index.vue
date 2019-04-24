<template>
  <PostForm/>
</template>

<script>
import PostForm from "@/components/PostForm";

export default {
  middleware: ["autologin", "notAuthenticated"],
  components: { PostForm }
};
</script>