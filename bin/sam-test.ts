#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SamTestStack } from '../lib/sam-test-stack';

const app = new cdk.App();
new SamTestStack(app, 'SamTestStack');
