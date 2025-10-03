/*
VerificationPage.tsx
This page handles the verification of user accounts through email codes.
from a spring boot backend.
*/
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';