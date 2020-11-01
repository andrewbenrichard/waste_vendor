<?php

// use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::group(['prefix'=> 'auth','namespace' => 'API'], function(){
        Route::post('signin', 'Auth\LoginController');
        Route::post('signout', 'Auth\LogoutController');
        Route::get('me', 'Auth\MeController');
});
Route::group(['prefix'=> 'sc_admin','namespace' => 'API'], function(){
        /* events */
        Route::get('events', 'ApiController@adminEvents');
        Route::get('events/gallery/{id}', 'ApiController@EventGallery');
        Route::post('post/event', 'ApiController@EventStore');
        Route::delete('delete/event/{id}', 'ApiController@EventDelete');
        Route::post('post/event/gallery', 'ApiController@postEventGallery');


        /* category */
        Route::get('categories', 'ApiController@adminCategories');
        Route::get('single/project/{slug}', 'ApiController@singleProject');
        Route::post('post/category', 'ApiController@CategoryStore');
        Route::delete('delete/project/{id}', 'ApiController@ProjectDelete');

        /* Testimonial */
        Route::get('testimonials', 'ApiController@adminTestimonial');
        Route::get('single/testimonial/{slug}', 'ApiController@singleTestimonial');
        Route::post('post/testimonial', 'ApiController@TestimonialStore');
        Route::delete('delete/testimonial/{id}', 'ApiController@TestimonialDelete');

        /* delivery */
        Route::get('deliveries', 'ApiController@adminDeliveries');
        Route::get('single/project/{slug}', 'ApiController@singleProject');
        Route::post('post/delivery_type', 'ApiController@DeliveryStore');
        Route::delete('delete/project/{id}', 'ApiController@ProjectDelete');
        
       
        /* donaion */
        Route::post('post/donation', 'ApiController@saveDonation');
        Route::get('donations', 'ApiController@donations');
        Route::delete('delete/donation/{id}', 'ApiController@DonateDelete');
        /* articles */
        Route::get('articles', 'ApiController@articles');
        Route::get('single/article/{slug}', 'ApiController@singleArticle');
        Route::post('post/article', 'ApiController@ArticleStore');
        Route::delete('delete/article/{id}', 'ApiController@ArticleDelete');
        /* gallery */
        Route::get('galleries', 'ApiController@galleries');
        Route::delete('delete/gallery/{id}', 'ApiController@GalleryDelete');
        Route::post('post/gallery', 'ApiController@GalleryStore');
       
});
/* 

for front end side

*/
Route::group(['prefix'=> 'sc_front','namespace' => 'API'], function(){
        /* category */
        Route::get('lateststats', 'ApiController@latestStats');
        Route::get('categories', 'ApiController@frontCategories');
        Route::get('top_article', 'ApiController@FrontTopArticle');
        Route::get('articles_mini', 'ApiController@FrontArticlesMini');
        Route::get('testimonials', 'ApiController@frontTestimonials');

        /* events */
        Route::get('events', 'ApiController@adminEvents');
        Route::get('single/event/{slug}', 'ApiController@singleEvent');
        Route::get('events/gallery/{slug}', 'ApiController@EventGalleries');

        /* products */
        Route::get('product_listings', 'ApiController@frontProducts');
        Route::get('single/product/listing/{slug}', 'ApiController@frontSingleProduct');
      
        /* articles */
        Route::get('articles', 'ApiController@articles');
        Route::get('single/article/{slug}', 'ApiController@singleArticle');
        Route::post('post/article', 'ApiController@ArticleStore');
        Route::delete('delete/article/{id}', 'ApiController@ArticleDelete');
     
        /* cart */
        Route::post('post/order', 'ApiController@saveOrder');
        Route::get('orders/items/{user_email}', 'ApiController@getUserOrder');
});
// Route::apiResources(['user' => 'API\UserController']);
