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
        stage('Lint') {
            steps {
                    sh 'cd app && npm run lint'
            }
        }
    }
}