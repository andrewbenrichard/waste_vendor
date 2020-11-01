<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" href="{{ asset('/assets/images/favicon/1.png') }}" type="image/x-icon">
    <link rel="shortcut icon" href="{{ asset('/assets/images/favicon/1.png') }}" type="image/x-icon">
    @if(strpos($_SERVER['REQUEST_URI'], 'dashboard') !== false)


    @include('layouts.back_header')
    
  
    @else
    @include('layouts.dev_front_header')
    
      @endif
   
</head>
<body>
    <div id="app">
	<!-- Pre Loader -->

  
            @yield('content')
            
    </div>

    @if(strpos($_SERVER['REQUEST_URI'], 'dashboard') !== false)


    @include('layouts.back_extras')
    
  
    @else
 
    @include('layouts.dev_front_extras')
      @endif
   
      
</body>
</html>
