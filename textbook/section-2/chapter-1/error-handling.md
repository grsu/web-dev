# Why errors should be handled?

Unhandled error may result in application crash, which would cause denial of
service. It is a severe issue for server, as many clients would be denied of
service at the same time.

## Example

- https://github.com/ImageMagick/ImageMagick/issues/196
- https://github.com/ImageMagick/ImageMagick/issues/352
- https://github.com/ImageMagick/ImageMagick/commit/41e955984b034777903cfa61e500a0b922eb9cbd
- https://launchpad.net/bugs/cve/CVE-2016-10062
