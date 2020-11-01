<template>
  <div class="componet_holder">
    <topHeader pageTitle="Dashboard " />

    <!--  BEGIN MAIN CONTAINER  -->
    <div class="main-container" id="container">
      <div class="overlay"></div>
      <div class="search-overlay"></div>

      <sidebar />

      <!--  BEGIN CONTENT AREA  -->
      <div id="content" class="main-content">
        <div class="layout-px-spacing">
          <div class="row layout-top-spacing">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
              <div class="widget widget-account-invoice-one">
                <div class="widget-heading">
                  <h5 class>Donations</h5>
                </div>

                <div class="widget-content">
                  <div class="invoice-box">
                    <div class="acc-total-info">
                      <h5>Balance</h5>
                      <p class="acc-amount">₦0.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
              <div class="widget widget-account-invoice-one">
                <div class="widget-heading">
                  <h5 class>Volunteers</h5>
                </div>

                <div class="widget-content">
                  <div class="invoice-box">
                    <div class="acc-total-info">
                      <h5>Registered Volunteers</h5>
                      <p class="acc-amount">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
              <div class="widget widget-account-invoice-one">
                <div class="widget-heading">
                  <h5 class>Products</h5>
                </div>

                <div class="widget-content">
                  <div class="invoice-box">
                    <div class="acc-total-info">
                      <h5>All products</h5>
                      <p class="acc-amount">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
              <div class="widget widget-account-invoice-one">
                <div class="widget-heading">
                  <h5 class>Orders</h5>
                </div>

                <div class="widget-content">
                  <div class="invoice-box">
                    <div class="acc-total-info">
                      <h5>Available Orders</h5>
                      <p class="acc-amount">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
              <div class="widget widget-table-two">
                <div class="widget-heading">
                  <h5 class>Recent Donations</h5>
                </div>

                <div class="widget-content">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>
                            <div class="th-content">Donor Name</div>
                          </th>
                          <th>
                            <div class="th-content">Location</div>
                          </th>
                          <th>
                            <div class="th-content">OrderID</div>
                          </th>
                          <th>
                            <div class="th-content th-heading">Amount</div>
                          </th>
                          <th>
                            <div class="th-content">Date</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="td-content customer-name">
                              <img src="/backend/assets/img/profile-7.jpg" alt="avatar" />Andy King
                            </div>
                          </td>
                          <td>
                            <div class="td-content product-brand">Nike Sport</div>
                          </td>
                          <td>
                            <div class="td-content">#76894</div>
                          </td>
                          <td>
                            <div class="td-content pricing">
                              <span class>$88.00</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="badge outline-badge-primary">Shipped</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content customer-name">
                              <img src="/backend/assets/img/profile-4.jpg" alt="avatar" />Irene Collins
                            </div>
                          </td>
                          <td>
                            <div class="td-content product-brand">Speakers</div>
                          </td>
                          <td>
                            <div class="td-content">#75844</div>
                          </td>
                          <td>
                            <div class="td-content pricing">
                              <span class>$84.00</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="badge outline-badge-success">Paid</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content customer-name">
                              <img src="/backend/assets/img/profile-10.jpg" alt="avatar" />Laurie Fox
                            </div>
                          </td>
                          <td>
                            <div class="td-content product-brand">Camera</div>
                          </td>
                          <td>
                            <div class="td-content">#66894</div>
                          </td>
                          <td>
                            <div class="td-content pricing">
                              <span class>$126.04</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="badge outline-badge-danger">Pending</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content customer-name">
                              <img src="/backend/assets/img/profile-13.jpg" alt="avatar" />Luke Ivory
                            </div>
                          </td>
                          <td>
                            <div class="td-content product-brand">Headphone</div>
                          </td>
                          <td>
                            <div class="td-content">#46894</div>
                          </td>
                          <td>
                            <div class="td-content pricing">
                              <span class>$56.07</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="badge outline-badge-success">Paid</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content customer-name">
                              <img src="/backend/assets/img/profile-5.jpg" alt="avatar" />Ryan Collins
                            </div>
                          </td>
                          <td>
                            <div class="td-content product-brand">Sport</div>
                          </td>
                          <td>
                            <div class="td-content">#89891</div>
                          </td>
                          <td>
                            <div class="td-content pricing">
                              <span class>$108.09</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="badge outline-badge-primary">Shipped</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content customer-name">
                              <img src="/backend/assets/img/profile-6.jpg" alt="avatar" />Nia Hillyer
                            </div>
                          </td>
                          <td>
                            <div class="td-content product-brand">Sunglasses</div>
                          </td>
                          <td>
                            <div class="td-content">#26974</div>
                          </td>
                          <td>
                            <div class="td-content pricing">
                              <span class>$168.09</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="badge outline-badge-primary">Shipped</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content customer-name">
                              <img src="/backend/assets/img/profile-11.jpg" alt="avatar" />Sonia Shaw
                            </div>
                          </td>
                          <td>
                            <div class="td-content product-brand">Watch</div>
                          </td>
                          <td>
                            <div class="td-content">#76844</div>
                          </td>
                          <td>
                            <div class="td-content pricing">
                              <span class>$110.00</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="badge outline-badge-success">Paid</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
              <div class="widget widget-table-three">
                <div class="widget-heading">
                  <h5 class>Top Selling Product</h5>
                </div>

                <div class="widget-content">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>
                            <div class="th-content">Product</div>
                          </th>
                          <th>
                            <div class="th-content th-heading">Price</div>
                          </th>
                          <th>
                            <div class="th-content th-heading">Discount</div>
                          </th>
                          <th>
                            <div class="th-content">Sold</div>
                          </th>
                          <th>
                            <div class="th-content">Source</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="td-content product-name">
                              <img src="/backend/assets/img/speaker.jpg" alt="product" />Speakers
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="pricing">$84.00</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="discount-pricing">$10.00</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">240</div>
                          </td>
                          <td>
                            <div class="td-content">
                              <a href="javascript:void(0);" class>Direct</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content product-name">
                              <img src="/backend/assets/img/sunglass.jpg" alt="product" />Sunglasses
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="pricing">$56.07</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="discount-pricing">$5.07</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">190</div>
                          </td>
                          <td>
                            <div class="td-content">
                              <a href="javascript:void(0);" class>Google</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content product-name">
                              <img src="/backend/assets/img/watch.jpg" alt="product" />Watch
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="pricing">$88.00</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="discount-pricing">$20.00</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">66</div>
                          </td>
                          <td>
                            <div class="td-content">
                              <a href="javascript:void(0);" class>Ads</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content product-name">
                              <img src="/backend/assets/img/laptop.jpg" alt="product" />Laptop
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="pricing">$110.00</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="discount-pricing">$33.00</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">35</div>
                          </td>
                          <td>
                            <div class="td-content">
                              <a href="javascript:void(0);" class>Email</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content product-name">
                              <img src="/backend/assets/img/camera.jpg" alt="product" />Camera
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="pricing">$126.04</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="discount-pricing">$26.04</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">30</div>
                          </td>
                          <td>
                            <div class="td-content">
                              <a href="javascript:void(0);" class>Referral</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content product-name">
                              <img src="/backend/assets/img/shoes.jpg" alt="product" />Shoes
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="pricing">$108.09</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="discount-pricing">$47.09</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">130</div>
                          </td>
                          <td>
                            <div class="td-content">
                              <a href="javascript:void(0);" class>Google</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="td-content product-name">
                              <img src="/backend/assets/img/headphones.jpg" alt="product" />Headphone
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="pricing">$168.09</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">
                              <span class="discount-pricing">$60.09</span>
                            </div>
                          </td>
                          <td>
                            <div class="td-content">170</div>
                          </td>
                          <td>
                            <div class="td-content">
                              <a href="javascript:void(0);" class>Ads</a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
import topHeader from "./layouts/header.vue";
import sidebar from "./layouts/sidebar.vue";
import bottomFooter from "./layouts/footer.vue";

export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      stats: {
        projectCount: "",
        DonateCount: ""
      }
    };
  },
  components: {
    topHeader,
    sidebar,
    bottomFooter
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
    loadStats() {
      axios.get("api/sc_admin/stats").then(({ data }) => (this.stats = data));
    }
  },
  created() {
    this.$Progress.start();
    Fire.$on("AfterCreate", () => {
      this.loadStats();
    });
    this.loadStats();
    this.$Progress.finish();
  }
};
</script>