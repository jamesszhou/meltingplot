
def generate_code(request):
    return """import matplotlib
import matplotlib.pyplot as plt 
import numpy as np
matplotlib.use('Agg')
t = np.arange(0.0, 2.0, 0.01)
s = np.sin(2*np.pi*t)
plt.plot(t, s)

plt.xlabel('time (s)')
plt.ylabel('voltage (mV)')
plt.title('asdfasdfts, folks')"""
