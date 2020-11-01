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
                      v-model="form.event_name"
                      type="text"
                      name="event_name"
                      placeholder="Event Title"
                      class="form-control"
                      :class="{
                                                'is-invalid': form.errors.has(
                                                    'event_name'
                                                )
                                            }"
                    />
                    <has-error :form="form" field="event_name"></has-error>
                  </div>
                  <div class="form-group">
                    <input
                      v-model="form.event_theme"
                      type="text"
                      name="event_theme"
                      placeholder="Theme of the event"
                      class="form-control"
                      :class="{
                                                'is-invalid': form.errors.has(
                                                    'event_theme'
                                                )
                                            }"
                    />
                    <has-error :form="form" field="event_theme"></has-error>
                  </div>
                  <div class="form-group">
                    <input
                      v-model="form.event_location"
                      type="text"
                      name="event_location"
                      placeholder="Location of event"
                      class="form-control"
                      :class="{
                                                'is-invalid': form.errors.has(
                                                    'event_location'
                                                )
                                            }"
                    />
                    <has-error :form="form" field="event_location"></has-error>
                  </div>
                  <div class="form-group">
                    <datetime v-model="event_d" type="date" input-id="eventDate">
                      <label for="eventDate" slot="before">Date of the event</label>
                    </datetime>

                    <has-error :form="form" field="event_date"></has-error>
                  </div>
                  <div class="form-group">
                    <datetime v-model="event_t" type="time" input-id="eventTime">
                      <label for="eventTime" slot="before">Time of the event</label>
                    </datetime>

                    <has-error :form="form" field="event_time"></has-error>
                  </div>
                  <div class="form-group">
                    <input
                      v-model="form.event_video_url"
                      type="text"
                      name="event_video_url"
                      placeholder="Enter Youtube link for past event"
                      class="form-control"
                      :class="{
                                                'is-invalid': form.errors.has(
                                                    'event_video_url'
                                                )
                                            }"
                    />
                    <has-error :form="form" field="event_video_url"></has-error>
                  </div>
                  <div class="form-group" style="display:none;">
                    <textarea
                      v-model="form.event_des"
                      type="text"
                      name="event_des"
                      placeholder="Describe this event"
                      class="form-control"
                      :class="{
                                                'is-invalid': form.errors.has(
                                                    'event_des'
                                                )
                                            }"
                    ></textarea>
                    <has-error :form="form" field="event_des"></has-error>
                  </div>

                  <div class="form-group">
                    <input
                      name="event_img"
                      @change="CreateImage"
                      placeholder="Upload event Image"
                      type="file"
                      :class="{
                                                'is-invalid': form.errors.has(
                                                    'event_img'
                                                )
                                            }"
                    />
                    <has-error :form="form" field="event_img"></has-error>
                  </div>
                  <editor
                    :initialValue="editorText"
                    :options="editorOptions"
                    height="200px"
                    initialEditType="wysiwyg"
                    @change="onEditorChange"
                    previewStyle="vertical"
                    ref="toastuiEditor"
                  />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="timeCheck">Close</button>
                  <button type="submit" v-show="!savingBtn" class="btn btn-primary">Create</button>
                  <button class="btn btn-primary" v-show="savingBtn">
                    <div class="spinner-border text-white align-self-center loader-sm"></div>Loading
                  </button>
                </div>
              </form>
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
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

import { Editor } from "@toast-ui/vue-editor";

export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      savingBtn: false,
      event_t: "",
      event_d: "",
      form: new Form({
        event_name: "",
        event_des: "",
        event_location: "",
        event_date: "",
        event_theme: "",
        event_time: "",
        event_video_url: "",
        event_img: ""
      }),
      editorText: "This is initialValue.",
      editorOptions: {
        hideModeSwitch: true
      }
    };
  },
  components: {
    topHeader,
    bottomFooter,
    sidebar,
    editor: Editor,
    datetime: Datetime
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
        this.form.event_img = reader.result;
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    },
    onEditorChange() {
      this.form.event_des = this.$refs.toastuiEditor.invoke("getHtml");
      console.log(this.form.event_des);
    },
    timeCheck() {
      console.log();
    },
    createEvent() {
      this.form.event_time = new Date(
        Date.parse(this.event_t)
      ).toLocaleTimeString();
      this.form.event_date = new Date(
        Date.parse(this.event_d)
      ).toLocaleDateString();
      this.$Progress.start();
      this.savingBtn = true;
      this.form
        .post("/api/sc_admin/post/event")
        .then(() => {
          Fire.$emit("AfterCreate");
          this.savingBtn = false;
          Toast.fire({
            type: "success",
            title: "Event created successfully"
          });
          this.$Progress.finish();
        })
        .catch(() => {
          this.savingBtn = false;
        });
    }
  },
  created() {
    this.$Progress.start();
    Fire.$on("AfterCreate", () => {
      this.form.reset();
    });
    this.firstloading = false;
    this.$Progress.finish();
  }
};
</script>
