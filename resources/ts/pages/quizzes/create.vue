<script setup lang="ts">
definePage({
  meta: {
    redirectIfNotLoggedIn: true,
    redirectIfNotVerified: true,
    layout: "default",
    navActiveLink: "quizzes",
  },
});

const router = useRouter();
const created = () => {
  router.push({ name: "quizzes" });
};
</script>

<template>
  <QuizzesForm @created="created" />
</template>
