<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Vue Tasker">
    <meta name="keywords" content="Vue Tasker">
    <meta name="author" content="Andrew Ben Richard">
    <link rel="icon" href="{{ asset('/assets/images/favicon/1.png') }}" type="image/x-icon">
    <link rel="shortcut icon" href="{{ asset('/assets/images/favicon/1.png') }}" type="image/x-icon">
    @if(strpos($_SERVER['REQUEST_URI'], 'dashboard') !== false)


    @include('layouts.back_header')
    
  
    @else
    @include('layouts.front_header')
    
      @endif
   
</head>
<body>
    <div id="app">
	<!-- Pre Loader -->

  <div class="site-preloader-wrap">
    <div class="spinner"></div>
  </div>
        
            @yield('content')
            
            <a href="#" class="scrollToTop"><i class="icofont-swoosh-up"></i></a>
    </div>

    @if(strpos($_SERVER['REQUEST_URI'], 'dashboard') !== false)


    @include('layouts.back_extras')
    
  
    @else
    <a href="#top" class="go-top" style="display: block;"
            ><i class="fa fa-angle-up"></i
        ></a>
    @include('layouts.front_extras')
      @endif
   
      
</body>
</html>
