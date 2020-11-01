<template>
    <section class="fxt-template-animation fxt-template-layout4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-12 fxt-bg-wrap">
                    <div class="fxt-bg-img" data-bg-image="/assets/front/img/figure/bg4-l.jpg">
                        <div class="fxt-header">
                            
                            <div class="fxt-transformY-50 fxt-transition-delay-2">
                                <h1>Welcome To Sawi Vendors Portal</h1>
                            </div>
                            <div class="fxt-transformY-50 fxt-transition-delay-3">
                                <p>
                                  Login to list your products and access orders
                                </p>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <div class="col-md-6 col-12 fxt-bg-color">
                    <div class="fxt-content">
                        <div class="fxt-form">
                            <form @submit.prevent="submit" @keydown="form.onKeydown($event)">
                                <div class="form-group">  
                                    <label for="email" class="input-label">Email Address</label>                                              
                                    <input  v-model="form.email" type="email" id="email" class="form-control" name="email" placeholder="demo@gmail.com" required="required"
                                    :class="{
                                    'is-invalid': form.errors.has('email')
                                }">
                                              <has-error :form="form" field="email"></has-error>

                                </div>
                                <div class="form-group">  
                                    <label for="password" class="input-label">Password</label>                                               
                                    <input  v-model="form.password" id="password" type="password" class="form-control" name="password" placeholder="********" required="required"
                                    :class="{
                                    'is-invalid': form.errors.has('password')
                                }"
                                >
                                    <i toggle="#password" class="fa fa-fw fa-eye toggle-password field-icon"></i>
                                                  <has-error :form="form" field="password"></has-error>

                                </div>
                               
                                <div class="form-group">
                                    <button :disabled="form.busy" type="submit" class="fxt-btn-fill">Log in</button>
                                </div>
                            </form>                            
                        </div> 
                        <div class="fxt-footer">
                            <p>Don't have an account?
                              <router-link to="/register" class="switcher-text">Register</router-link>
                              </p>
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
    </section>
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
  },
  components: {
  }
};
</script>