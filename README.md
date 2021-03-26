## Tricky parts solved

- image CDN <br>
  Instead of downloading imgs directly from `unsplash.com` an image CDN is used ![cdn](./assets/cdn.png) to serve `*.webp` files ![webp](./assets/webp.png) whenever possible and the image in the optimised resolution is downloaded (based on the containers width and legth). Additionally retina displays are taken into consideration.

## Setting up Jenkins

```bash
docker run -p 8080:8080 -p 50000:50000 -d -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts
```

and

```bash
docker logs <container id>
```

and copy the administrator password

go to `localhost:8080` and use the password

Create a new user e.g. `jenkins-user`
