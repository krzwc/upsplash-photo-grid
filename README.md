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
