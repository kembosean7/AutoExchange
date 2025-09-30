//run cmd commands from ts
import { exec } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

import { getLogger } from '../../utils/logger';
import { getMavenCommand } from '../../utils/mavenUtils';
import { getJavaCommand } from '../../utils/javaUtils';
import { SpringBootProcess } from '../../types/processTypes';