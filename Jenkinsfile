pipeline {
    agent {
        docker {
            image 'cypress/base:14.16.0' 
            args '-p 3000:3000' 
        }
    }
    environment {
        NETLIFY_SITE_ID = credentials('netlify-site-id')
        NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token')
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
        stage('Deploy') {
            steps {
                    echo "Building..."
                    sh 'cd app && npm run build'
                    echo 'Deploying...'
                    sh 'npm i -g netlify-cli'
                    sh 'cd app && netlify deploy --site ${NETLIFY_SITE_ID} --auth ${NETLIFY_AUTH_TOKEN} -d build --prod'
            }
        }
    }
}