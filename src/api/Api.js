import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react';
import { API_URL } from '@env';
import axios from 'axios';

const [characters, setCharacters] = useState([])

