Pod::Spec.new do |s|
require "json"
package = JSON.parse(File.read(File.join(__dir__, "package.json")))
version = package['version']
  s.name         = "fego-rn-keyboard"
  s.version      = version
  s.summary      = "Update"
  s.description  = "fego-rn-keyboard"
  s.homepage     = "https://github.com/askday/react-native-yusha-customKeyboard.git"
  s.license      = "MIT"
  s.author             = "askday"
  s.platform     = :ios, "8.0"
  s.source       = { :git => "https://github.com/askday/react-native-yusha-customKeyboard.git" }
  s.source_files = 'ios/CustomKeyboard/*'
  s.public_header_files = 'ios/CustomKeyboard/*.h'
  s.dependency 'React'
end
