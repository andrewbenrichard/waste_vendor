<template>
  <div class="row">
    <div class="col-md-4" v-for="(event, id) in events" :key="id">
      <div class="card component-card_9">
        <img
          v-show="event.event_img"
          :src="'/public/uploads/' + event.event_img"
          class="card-img-top"
          alt="widget-card-2"
        />
        <div class="card-body">
          <p class="meta-date">Date: {{ event.event_date }}</p>
          <p class="meta-date">Time: {{ event.event_time }}</p>

          <h5 class="card-title">{{ event.event_name }}</h5>
          <p class="card-text">Theme: {{event.event_theme}}</p>
          <p class="card-text" v-show="event.event_video_url">
            <a :href="'http://'+event.event_video_url" target="_blank">View video</a>
          </p>
          <p class="card-text" v-show="!event.event_video_url">No event video</p>

          <div class="meta-info">
            <div class="meta-user">
              <div class="user-name">Location: {{event.event_location}}</div>
            </div>
            <router-link
              :to="'/prime/dashboard/event/gallery/'+event.id"
              class="btn btn-info btn-sm"
            >Add gallery</router-link>
            <button class="btn btn-warning btn-sm" @click="deleteEvent(event.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  created() {},
  props: ["events"],
  data() {
    return {
      form: new Form({
        id: this.events.id
      })
    };
  },
  methods: {
    deleteEvent(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        // send request to the server
        if (result.value) {
          this.form
            .delete("/api/sc_admin/delete/event/" + id)
            .then(() => {
              if (result.value) {
                Swal.fire(
                  "Deleted!",
                  "The Event  has been deleted.",
                  "success"
                );
              }
              Fire.$emit("AfterCreate");
            })
            .catch(() => {
              Swal("Failed", "There was something wrong.", "warning");
            });
        }
      });
    }
  }
};
</script>
