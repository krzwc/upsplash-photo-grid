pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing...'
                nodejs('node-14') {
                    sh 'cd app && npm install'
                }
            }
        }
        stage('Test') {
            steps {
                nodejs('node-14') {
                    sh 'cd app && npm test a -- --watchAll=false'
                }
            }
        }
        stage('Lint') {
            steps {
                nodejs('node-14') {
                    sh 'cd app && npm lint'
                }
            }
        }
    }
}