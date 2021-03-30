pipeline {
    agent {
        docker {
            image 'cypress/base:14.16.0' 
            args '-p 3000:3000' 
        }
    }

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
        stage('Lint') {
            steps {
                    sh 'cd app && npm run lint'
            }
        }
        stage('E2E test') {
            steps {
                    sh 'cd app && npm run cypress:start'
            }
        }
    }
}