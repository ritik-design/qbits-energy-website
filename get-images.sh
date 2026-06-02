#!/bin/bash
curl -s "https://qbitsenergy.com/" | grep -oE 'https://qbitsenergy.com/wp-content/uploads/[^"<>\)]+\.(png|jpg|jpeg)' | sort -u | head -50
