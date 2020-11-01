<template>
  <div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="page-title-content">
              <h2>Login</h2>
              <ul>
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Page Title Area -->

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 auth__left__content_holder">
          <div class="auth__content__intro">
            <h3>Login to manage Blog and Donations</h3>
          </div>
        </div>
        <div class="col-md-6 auth_form_content">
          <form @submit.prevent="submit" @keydown="form.onKeydown($event)">
            <div class="form-group">
              <label>Email</label>
              <input
                v-model="form.email"
                type="text"
                name="email"
                class="form-control"
                :class="{
                                    'is-invalid': form.errors.has('email')
                                }"
              />
              <has-error :form="form" field="email"></has-error>
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                v-model="form.password"
                type="password"
                name="password"
                class="form-control"
                :class="{
                                    'is-invalid': form.errors.has('password')
                                }"
              />
              <has-error :form="form" field="password"></has-error>
            </div>

            <button :disabled="form.busy" type="submit" class="btn btn-primary">Log In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: new Form({
        email: "",
        password: "",
        remember: false
      })
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn"
    }),
    submit() {
      this.signIn(this.form)
        .then(() => {
          window.location.href = "/dashboard";
        })
        .catch(() => {
          console.log("failed");
        });
    }
    // login() {
    //   // Submit the form via a POST request
    //   this.form.post("api/auth/signin").then(({ data }) => {
    //     console.log(data);
    //   });
    // }
  },
  mounted() {
    console.log("login component mounted.");
  },
  components: {
  }
};
</script>