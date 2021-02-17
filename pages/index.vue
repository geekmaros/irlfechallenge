<template>
  <div class="container flex flex-col">
    <pre>{{datasource}}</pre>
<!--    <EventsCardComponent :datasource='events'></EventsCardComponent>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventsCardComponent from "~/components/EventsCardComponent";
// import gql from 'graphql-tag'
// import fetchUser from "~/apollo-api/queries/fetchUserAndUserPlan.gql"
export default {
  computed: {
    ...mapState({
      events: "events/events"
    })
  },
  components: { EventsCardComponent }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
