use Rack::Static,
:urls => ["/css", "/img", "/js"],


run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
File.open('index1.html', File::RDONLY)
  ]
}