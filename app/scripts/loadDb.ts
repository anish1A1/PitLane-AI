
// This file is responsible for loading out data into our database

import {DataAPIClient} from "@datastax/astra-db-ts"
import {PuppeteerWebBaseLoader} from "langchain/document_loaders/web/puppeteer"
import OpenAI from "openai"

import { RecursiveCharacterTextSplitter} from "langchain/text_splitter"

import "dotenv/config"

