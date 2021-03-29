pipeline {
    agent any
    tools {nodejs "node-14"}

    stages {
        stage('Build') {
            steps {
                echo 'Installing...'
                sh 'cd app && npm install'
            }
        }
        stage('Test') {
            steps {
                    sh 'cd app && npm test a -- --watchAll=false'
            }
        }
        stage('E2E test') {
            steps {
                    sh 'docker run -v $PWD:/e2e -w /e2e cypress/included:6.8.0'
            }
        }
        stage('Lint') {
            steps {
                    sh 'cd app && npm run lint'
            }
        }
    }
}