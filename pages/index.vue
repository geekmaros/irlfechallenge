<template>
  <div class="container flex flex-col">
    <EventsCardComponent></EventsCardComponent>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventsCardComponent from "~/components/EventsCardComponent";
// import gql from 'graphql-tag'
// import fetchUser from "~/apollo-api/queries/fetchUserAndUserPlan.gql"
export default {
  components: { EventsCardComponent }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
