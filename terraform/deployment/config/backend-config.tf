bucket                      = "terraform-states-portfolio"
key                         = "ci-cd-deployment.tfstate"
region                      = "ap-northeast-2"
encrypt                     = true
dynamodb_table              = "terraform-locks"