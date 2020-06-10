Pod::Spec.new do |s|
require "json"
package = JSON.parse(File.read(File.join(__dir__, "package.json")))
version = package['version']
  s.name         = "zp-rn-keyboard"
  s.version      = version
  s.summary      = "Update"
  s.description  = "zp-rn-keyboard"
  s.homepage     = "https://github.com/zrj1884/zp-rn-keyboard.git"
  s.license      = "MIT"
  s.author       = "zrj1884"
  s.platform     = :ios, "8.0"
  s.source       = { :git => "https://github.com/zrj1884/zp-rn-keyboard.git" }
  s.source_files = 'ios/CustomKeyboard/*'
  s.public_header_files = 'ios/CustomKeyboard/*.h'
  s.dependency 'React'
end
