<template>
  <div class="componet_holder">
    <topHeader />

    <!--  BEGIN MAIN CONTAINER  -->
    <div class="main-container" id="container">
      <div class="overlay"></div>
      <div class="search-overlay"></div>

      <sidebar />

      <!--  BEGIN CONTENT AREA  -->
      <div id="content" class="main-content">
        <div class="layout-px-spacing">
          <div class="row layout-top-spacing">
            <div class="col-md-12">
              <p>Create an event</p>
              <form @submit.prevent="createEvent">
                <div class="modal-body">
                  <div class="form-group">
                    <input
                      name="gallery_name"
                      @change="CreateImage"
                      placeholder="Upload event Image"
                      type="file"
                      :class="{
                                                'is-invalid': form.errors.has(
                                                    'gallery_name'
                                                )
                                            }"
                    />
                    <has-error :form="form" field="gallery_name"></has-error>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" v-show="!savingBtn" class="btn btn-primary">Create</button>
                  <button class="btn btn-primary" v-show="savingBtn">
                    <div class="spinner-border text-white align-self-center loader-sm"></div>Loading
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-4" v-for="(item, index) in galleries" :key="index">
                  <div class="card component-card_2">
                    <img
                      :src="'/public/uploads/' + item.gallery_name"
                      class="card-img-top"
                      alt="widget-card-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <bottomFooter />
      </div>
      <!--  END CONTENT AREA  -->
    </div>
    <!-- END MAIN CONTAINER -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import topHeader from "../layouts/header.vue";
import sidebar from "../layouts/sidebar.vue";
import bottomFooter from "../layouts/footer.vue";

export default {
  mounted() {
    this.$route.params;
  },
  data() {
    return {
      savingBtn: false,

      form: new Form({
        event_id: this.$route.params.id,
        gallery_name: ""
      }),
      galleries: {}
    };
  },
  components: {
    topHeader,
    bottomFooter,
    sidebar
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut"
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "home"
        });
      });
    },
    CreateImage(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      //   let vm = this;
      reader.onloadend = file => {
        this.form.gallery_name = reader.result;
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    },
    createEvent() {
      this.$Progress.start();
      this.savingBtn = true;
      this.form
        .post("/api/sc_admin/post/event/gallery")
        .then(() => {
          Fire.$emit("AfterCreate");
          this.savingBtn = false;
          Toast.fire({
            type: "success",
            title: "Image added to event created successfully"
          });
          this.$Progress.finish();
        })
        .catch(() => {
          this.savingBtn = false;
        });
    },
    loadGalleries() {
      axios
        .get("/api/sc_admin/events/gallery/" + this.$route.params.id)
        .then(({ data }) => (this.galleries = data));
    }
  },
  created() {
    this.$Progress.start();
    Fire.$on("AfterCreate", () => {
      this.form.reset();
    });
    this.firstloading = false;
    this.$Progress.finish();
    this.loadGalleries();
  }
};
</script>
